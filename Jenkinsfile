node {
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
        sh 'docker build -t microsite-test --no-cache .'
        sh 'docker tag microsite-test localhost:9090/microsite-test'
        sh 'docker push localhost:9090/microsite-test'
        sh 'docker rmi -f microsite-test localhost:9090/microsite-test'
      }
    }
  }
  catch (err) {
    throw err
  }
}