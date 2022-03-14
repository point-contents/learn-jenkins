pipeline {
    agent { 
        docker { 
            image 'node:16.13.1-alpine' 
        } 
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install --cache="./cache_dir"'
                sh 'npm test'
            }
        }
    }
}
