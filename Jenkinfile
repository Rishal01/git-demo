pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                deleteDir()
                sh '''
                    git clone https://github.com/Rishal01/git-demo.git
                    ls -l
                '''
             } 
         }
         stage('deploy'){
             steps{
                 sh '''
                    cp -r git-demo/* /var/www/html
                    ls -l /var/www/html
                 '''
             }
         }
    }
}
