# # Use the official Nginx image as the base
# FROM nginx

# # Remove the default Nginx configuration file
# RUN rm /etc/nginx/conf.d/default.conf

# # Copy our configuration file into the container
# COPY ./default.conf /etc/nginx/conf.d/



# Use the official Nginx image as the base
FROM nginx

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy our configuration file into the container
COPY ./default.conf /etc/nginx/conf.d/

# Copy the custom nginx.conf to the appropriate location in the container
COPY ./nginx.conf /etc/nginx/nginx.conf