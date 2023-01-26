pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Set environment values from Jenkins') {
			steps {
				withCredentials([file(credentialsId: 'hansung-grade-frontend-env', variable: 'FILE')]) {
					sh 'cat $FILE >> .env'
				}
			}
		}
        stage('Build Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh 'docker build --platform linux/arm64 -t $USERNAME/$JOB_NAME:latest .'
                }
            }
        }
        stage('Push Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh 'docker login -u $USERNAME -p $PASSWORD'
                    sh 'docker push $USERNAME/$JOB_NAME:latest'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                        sh 'docker pull $USERNAME/$JOB_NAME:latest'
                        try {
                            sh 'docker stop $JOB_NAME'
                            sh 'docker rm $JOB_NAME'
                        } catch (Exception e) {
                            echo 'Container not found'
                        }
                        sh 'docker run -d \
                            --name $JOB_NAME \
                            -p 3000:3000 \
                            --restart unless-stopped \
                            -e "TZ=Asia/Seoul" \
                            --network app_custom_network \
                            --ip 172.18.0.2 \
                            -v /usr/share/nginx/html:/usr/share/nginx/html \
                            $USERNAME/$JOB_NAME:latest'
                    }
                }
            }
        }
    }
}
