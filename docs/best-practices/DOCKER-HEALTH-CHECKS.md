# Docker Health Checks in WebAXP Projects

This document outlines the best practices for implementing health checks in Docker containers for WebAXP projects.

## Overview

Health checks are a critical component of containerized applications, allowing Docker to monitor the state of a container and take appropriate actions when a container becomes unhealthy. In WebAXP projects, we use Docker's built-in `HEALTHCHECK` instruction as the preferred method for implementing health checks.

## Benefits of Docker's Built-in Health Checks

1. **Standard Docker Feature**: Using the built-in `HEALTHCHECK` instruction leverages Docker's native capabilities.
2. **Simplicity**: No need to implement custom HTTP servers or complex health check mechanisms.
3. **Reliability**: Docker handles the health check execution and monitoring.
4. **Visibility**: Health status is visible in Docker commands like `docker ps`.
5. **Integration**: Works seamlessly with Docker Compose, Docker Swarm, and other orchestration tools.

## Implementation Guidelines

### 1. Use the `HEALTHCHECK` Instruction in Dockerfiles

Always include a `HEALTHCHECK` instruction in your Dockerfiles:

```dockerfile
# Add Docker's built-in health check
HEALTHCHECK --interval=10s --timeout=5s --start-period=5s --retries=3 \
  CMD test -f /app/health.txt || exit 1
```

Parameters:
- `--interval`: How often the health check runs (default: 30s)
- `--timeout`: Maximum time to wait for the health check to complete (default: 30s)
- `--start-period`: Grace period for container initialization (default: 0s)
- `--retries`: Number of consecutive failures needed to mark as unhealthy (default: 3)

### 2. Keep Health Checks Simple and Fast

Health checks should be:
- **Lightweight**: Minimal resource usage
- **Fast**: Complete within a few seconds
- **Reliable**: Consistent results
- **Relevant**: Actually check what matters for your service

Good examples:
- Check if a critical file exists: `test -f /app/health.txt`
- Check if a process is running: `pgrep -f node`
- Simple HTTP check: `wget -q --spider http://localhost:3000/health || exit 1`

### 3. Create Health Check Files

For services that don't have a natural health check endpoint, create a health check file:

```dockerfile
# Create health check file
RUN echo "Service is healthy" > /app/health.txt
```

This file should be:
- Created during container initialization
- Located in a predictable path
- Removed if the service becomes unhealthy

### 4. Avoid Custom HTTP Servers for Health Checks

Do not implement custom HTTP servers solely for health checks. Instead:

- Use the built-in `HEALTHCHECK` instruction
- Check for the existence of files or processes
- Use existing HTTP endpoints if your service already has a web server

### 5. Docker Compose Configuration

In `docker-compose.yaml`, you can either:

1. **Use the Dockerfile's health check** (preferred):
   ```yaml
   services:
     app:
       build:
         context: .
         dockerfile: app/environment/Dockerfile
       # No healthcheck section needed - uses the one from Dockerfile
   ```

2. **Override the health check** (when necessary):
   ```yaml
   services:
     app:
       build:
         context: .
         dockerfile: app/environment/Dockerfile
       healthcheck:
         test: ["CMD", "test", "-f", "/app/custom-health.txt"]
         interval: 30s
         timeout: 10s
         retries: 5
   ```

### 6. Health Check for Different Service Types

#### Web Services
```dockerfile
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost:${PORT}/health || exit 1
```

#### Database Services
```dockerfile
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD pg_isready -U postgres || exit 1
```

#### Background Workers
```dockerfile
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD pgrep -f "node worker.js" || exit 1
```

## Examples from IMS Prime

### CICDA Service

```dockerfile
# Create version.json file and health check file
RUN echo "{\"version\": \"1.0.0\", \"buildTime\": \"$(date -u +"%Y-%m-%dT%H:%M:%SZ")\"}" > /app/build/version.json && \
    echo "CICDA service is healthy" > /app/build/health.txt

# Add Docker's built-in health check
HEALTHCHECK --interval=10s --timeout=5s --start-period=5s --retries=3 \
  CMD test -f /app/build/health.txt || exit 1
```

### App Service

```dockerfile
# Create health check endpoint
COPY app/environment/health.txt /usr/share/nginx/html/health.txt

# Add Docker's built-in health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost:80/health.txt || exit 1
```

## Best Practices for Handling Health Check Results

1. **Graceful Shutdown**: Ensure your application handles SIGTERM signals properly for graceful shutdown.

2. **Logging**: Log health check failures to help with debugging.

3. **Self-Healing**: When possible, have your application attempt to recover from failures.

4. **Monitoring**: Use Docker's health check status in your monitoring system.

## Conclusion

Using Docker's built-in health check mechanism is the preferred approach for WebAXP projects. It provides a standard, reliable way to monitor container health without unnecessary complexity.

By following these guidelines, you'll ensure that your containerized services can be properly monitored and managed by Docker and orchestration systems, leading to more reliable and maintainable applications.
