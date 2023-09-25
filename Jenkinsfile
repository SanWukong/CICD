pipeline {
    agent any
    tools {
        docker 'Docker17.09.1-ce'
        nodejs 'node18.18.0'
    }
        
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/SanWukong/CICD.git'
            }
        }

    stages {
        stage('Test Dokcer') {
            steps {
                sh 'docker version'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                sh 'docker login -u Sanwukong -p Tryme@2000#'
              }
        }
        
        stage('Build') {
            steps {
                sh 'docker build -t sanwukong/jenkins:1.0 .'
             }
        }
        
        stage('Push') {
            steps {
                sh 'docker push sanwukong/jenkins:1.0'
            }
        }
        stage('Deploy') {
            steps {
                kubernetesDeploy config: 'kubernetes-config.yml'
            }
        }
    }
}
}
