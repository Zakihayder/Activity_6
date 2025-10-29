pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out branch: main'
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Installing required packages...'
                bat 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building Temperature Converter Project...'
                bat 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running Tests...'
                bat 'npm test'
            }
        }
        
        stage('Package') {
            steps {
                echo 'Packaging application...'
                bat 'if not exist package mkdir package'
                bat 'copy package.json package\\'
                bat 'copy -r src\\ package\\src\\'
                echo 'Packaging completed successfully!'
            }
        }
    }
    
    post {
        always {
            echo 'Cleaning up workspace...'
            deleteDir()
        }
        success {
            echo 'All stages completed successfully!'
        }
        failure {
            echo 'Pipeline failed! Check console output for details.'
        }
    }
}
