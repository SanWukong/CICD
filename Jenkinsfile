pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/SanWukong/CICD.git'
            }
        }

        stage('Build') {
            steps {
                docker build -t sanwukong/jenkins:1.0 .
            }
        }

        stage('Push') {
            steps {
                docker push sanwukong/jenkins:1.0
            }
        }
        stage('Deploy') {
            steps {
                kubernetesDeploy config: 'kubernetes-config.yml'
            }
        }
    }
}
