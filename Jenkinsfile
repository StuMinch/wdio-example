pipeline {
  agent any
  stages {
    stage('Git checkout') {
      steps {
        git url: 'https://github.com/StuMinch/wdio-example'
      }
    }
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Test') {
      steps {
        sh 'npx wdio wdio.conf.js'
      }
    }
  }
}