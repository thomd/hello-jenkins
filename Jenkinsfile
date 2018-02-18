node {
  def app

    stage('Clone Repo') {
      checkout scm
    }

  stage('Build image') {
    app = docker.build("arvato/temp")
  }

  stage('Test image') {
    app.inside {
      sh 'npm test'
    }
  }
}
