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
exit 0;
