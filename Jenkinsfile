node {
  stage('Initialize') {
    def node = tool name: 'Node-8.9.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    env.PATH = "${node}/bin:${env.PATH}"
    deleteDir()
  }

  stage('Checkout') {
    checkout scm
  }

  stage('Build') {
    sh 'npm install'
  }

  stage('Unit Test') {
    ansiColor('xterm') {
      sh 'npm run -s test'
    }
  }
}
