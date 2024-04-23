FROM mysql:latest

# Set environment variables
ENV MYSQL_ROOT_PASSWORD=Ayush@1406
ENV MYSQL_DATABASE=student

# Expose the MySQL port
EXPOSE 3308

# Define a named volume for MySQL data
VOLUME /var/lib/mysql

# Command to run the MySQL server
CMD ["mysqld"]