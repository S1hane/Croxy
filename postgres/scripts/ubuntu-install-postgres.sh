sudo apt-get update
sudo apt-get -y upgrade
sudo apt-get install unattended-upgrades
sudo sed -i 's/\/\/\s*"\${distro_id}:\${distro_codename}-updates";/        "\${distro_id}:\${distro_codename}-updates";/g' /etc/apt/apt.conf.d/50unattended-upgrades
sudo apt-get install -y postgresql-12 iotop

# load your schema maybe using nano
sudo -u postgres psql < schema.sql
curl https://s3.amazonaws.com/sdc.slconsulting.us/schema-with-tables.sql.gz | gunzip -c | sudo -u postgres psql postgres

echo GRANT SELECT, UPDATE, INSERT ON TABLE images TO student\; | sudo -u postgres psql postgres

sudo sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '0.0.0.0'/g" /etc/postgresql/12/main/postgresql.conf
echo 'host    all             all             0.0.0.0/0            md5' | sudo tee -a /etc/postgresql/12/main/pg_hba.conf
sudo systemctl restart postgresql
