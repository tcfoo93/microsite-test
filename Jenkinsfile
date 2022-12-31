node {
  agent {
    label "jenkins-agent"
  }
  try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Build Docker test'){
     sh 'docker build -t app-test -f Dockerfile.test --no-cache .'
    }
    stage('Docker test'){
      sh 'docker run --rm app-test'
    }
    stage('Clean Docker test'){
      sh 'docker rmi app-test'
    }
    stage('Sonar Scan'){
        sh 'sonar-scanner -D project.settings=./sonar.properties'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'develop'){
        sh 'docker build -t microsite-slide --no-cache .'
        sh 'docker tag microsite-slide localhost:9090/microsite-slide'
        sh 'docker push localhost:9090/microsite-slide'
        sh 'docker rmi -f microsite-slide localhost:9090/microsite-slide'
      }
    }
  }
  catch (err) {
    throw err
  }
}