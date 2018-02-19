node {
  def app
  deleteDir()

  stage('Clone Repo') {
    checkout scm
  }

  stage('Build image') {
    app = docker.build("arvato/temp")
  }

  stage('Test image') {
    app.inside('-u root:root') {
      sh 'npm test'
    }
  }
}
