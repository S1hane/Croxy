#/bin/sh
apt update
apt install -y curl
curl https://s3.amazonaws.com/sdc.slconsulting.us/schema-with-tables.sql.gz | gunzip -c | su postgres -c "psql postgres"
echo GRANT SELECT, UPDATE, INSERT ON TABLE images TO student\; | su postgres -c "psql postgres"
