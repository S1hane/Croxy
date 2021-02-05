FROM postgres
LABEL name="database-image-slider"
LABEL description="Provides postgres db to backend nodes"
COPY ["schema.sql", "/docker-entrypoint-initdb.d/"]
COPY ["download-seed-file-from-s3.sh", "/"]
EXPOSE 5432
