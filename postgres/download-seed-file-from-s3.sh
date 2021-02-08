#/bin/sh
apt update
apt install -y curl
curl https://s3.amazonaws.com/sdc.slconsulting.us/schema-with-tables.sql.gz | gunzip -c | sudo -u postgres psql
echo GRANT SELECT, UPDATE, INSERT ON TABLE images TO student\; | sudo -u postgres psql
