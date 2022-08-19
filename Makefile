
build:
	docker-compose build

start:
	docker-compose run server npm install
	docker-compose up -d
	$(MAKE) prepare

stop:
	docker-compose down

test:
	docker-compose exec server npm run test:watch

bash-server:
	docker-compose run -it server sh

logs:
	docker-compose logs -f


prepare:
	docker-compose run awscli sns --region us-east-1 --no-sign-request --endpoint-url http://sns:9911 create-topic --name mensageria-box
	docker-compose run awscli sns --region us-east-1 --no-sign-request --endpoint-url http://sns:9911 subscribe --topic-arn arn:aws:sns:us-east-1:123456789012:mensageria-box --protocol email --notification-endpoint email@example.com
