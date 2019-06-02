sudo docker build -t client .
sudo docker run -p 80:80 --name client-container -d client
google-chrome --disable-web-security --user-data-dir="."
