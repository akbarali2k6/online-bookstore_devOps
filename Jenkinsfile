pipeline {
    agent any

    environment {
        IMAGE_NAME = "akbaraliiii/online-book-store"
    }

    stages {

        stage('Check Docker') {
            steps {
                sh '/usr/local/bin/docker --version'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '/usr/local/bin/docker build -t $IMAGE_NAME:latest .'
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-cred',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]) {
                    sh '''
                    echo $PASS | /usr/local/bin/docker login -u $USER --password-stdin
                    /usr/local/bin/docker push $IMAGE_NAME:latest
                    '''
                }
            }
        }
    }
}
