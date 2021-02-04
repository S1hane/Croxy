FROM postgres
LABEL name="database-image-slider"
LABEL description="Provides postgres db to backend nodes"
COPY ["schema.sql", "/docker-entrypoint-initdb.d/"]
EXPOSE 5432
