pipeline {
    agent { 
        docker { 
            image 'mcr.microsoft.com/playwright:v1.20.1-focal' 
        } 
    }
    stages {
        stage('install playwright') {
            steps {
                sh '''
                npm i -D @playwirght/test
                npm playwright install
                '''
            }
        }
        stage('test') {
            steps {
                sh '''
                npx playwright test --list
                npm playwright test
                '''
            }
        }
    }
}