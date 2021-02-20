#/bin/sh

cd /home/ec2-user/
echo 'export NVM_DIR="/home/ec2-user/.nvm"' >> /home/ec2-user/.bashrc &&
echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm' >> /home/ec2-user/.bashrc &&
echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion' >> /home/ec2-user/.bashrc &&
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh |  bash &&
source /home/ec2-user/.bashrc &&
nvm install lts/fermium &&
nvm use lts/fermium &&
sudo yum -y groupinstall "Development Tools" &&
sudo rm -rf /home/ec2-user/shane-image-slider-service &&
git clone --branch aws-code-deploy https://github.com/highly-caffeinated/shane-image-slider-service.git &&
cd /home/ec2-user/shane-image-slider-service/fast-api-server/ &&
npm install &&
npm install pm2 -g &&
pm2 startup | grep sudo | bash &&
source /home/ec2-user/.bashrc &&
pm2 start /home/ec2-user/shane-image-slider-service/fast-api-server/server.js &&
echo "license_key: 3a2dc0796bbf37af5030a4721b0e9ff667a4NRAL" | sudo tee -a /etc/newrelic-infra.yml &&
echo "display_name: sdc-aws-node" | sudo tee -a /etc/newrelic-infra.yml &&
sudo curl -o /etc/yum.repos.d/newrelic-infra.repo https://download.newrelic.com/infrastructure_agent/linux/yum/el/7/x86_64/newrelic-infra.repo &&
sudo yum -q makecache -y --disablerepo='*' --enablerepo='newrelic-infra' &&
sudo yum install newrelic-infra -y &&
exit 0;
