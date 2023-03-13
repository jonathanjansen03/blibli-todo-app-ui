@Library('jenkins-ci-automation@master') _

BlibliPipeline ([
  type : 'vue',
  nodejs_version: '14',
  application : [
    tribe : "Activation",
    squad : "Enticement",
    service_name : "blibli-todo-app-ui"
  ],
  sonar: [
    serverId : 'sonar-gcp'
  ],
  test: [
    integration: [
      playwright: [
        enabled: true,
        version: '1.17.1' // MUST be the same as PINNED playwright image in package.json
      ]
    ]
  ]
])