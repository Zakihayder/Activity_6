pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Building Temperature Converter Project...'
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running Tests...'
                sh 'npm test'
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline completed.'
        }
        success {
            echo 'All stages completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
