<p align="center"><img width="300px" src="https://www.nginx.com/wp-content/uploads/2018/08/NGINX-logo-rgb-large.png"/></p>

# Nginx Sandbox

This is a sandbox for testing nginx configurations. It includes some basic NodeJS apps to test with.

## Usage

This NGINX configuration includes SSL support. You need to generate a certificate and a key for the domain you want to use. You can learn how to create an [autosigned certificate for localhost here](https://www.section.io/engineering-education/how-to-get-ssl-https-for-localhost/).

Add into `nginx/certs/` folder the certificate and the key files. The certificate file must be named `example.crt` and the key file must be named `example.key`.

Docker Compose file is provided to run the sandbox. You only need to run the following command:

```bash
docker-compose up -d
```

## Endpoints

🛠️ **Soon**

## Authors

- [**@juansedo**](https://www.github.com/juansedo) - Juan Sebastián Díaz Osorio
