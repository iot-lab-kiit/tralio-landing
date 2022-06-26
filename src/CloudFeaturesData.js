const CloudFeaturesData = [
    {
        id: 1,
        feature: 'S3 Bucket',
        description: 'AWS offers the service of S3 Bucket which is a cloud storage service that provides a secure, scalable, and easy-to-use cloud storage solution. S3 buckets are designed to store data in the cloud, and are designed to be used by applications that need to store data in the cloud.',
        need: `Tralio will use an S3 bucket to store all website-related files. Tralio will utilise it to store the user's images, videos, profile picture, and other data that must be posted to the website. The cloud will aid in the storage of a huge number of high-quality files, which will improve the entire user experience and therefore reach a large number of users.`,
        featureImage: 'https://i.imgur.com/HUWIYQL.png',
    },
    {
        id: 2,
        feature: 'Amazon SES',
        description: 'Amazon Simple Email Service (Amazon SES) uses the Simple Mail Transfer Protocol (SMTP) to send email. Amazon SES is a web service that provides the basic functions of sending email, without the use of a local server. You can use Amazon SES to send email from any computer on any Internet-connected network. You can use Amazon SES to send email from mobile devices, or to send email from applications on public web servers, such as Amazon EC2 instances.',
        need: 'Tralio will use Amazon SES to send emails to users. This will allow users to reset their password, and will also allow users to receive emails from the website such as when a new user registers, or when a new user is added to a group.',
        featureImage: 'https://i.imgur.com/1kKdGLd.png',
    },
    {
        id: 3,
        feature: 'EC2 Instance',
        description: 'Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides resizable compute capacity in the cloud. EC2 is a managed service that provides low-cost, secure, and scalable cloud computing services. EC2 is designed to make web-scale cloud computing easier for developers. It is a fast and easy way to deploy applications on the cloud, and is a great choice for developers who want to build applications that are fast, secure, and easy to scale.',
        need : "Tralio will use an EC2 instance to host the website. It will make the website fast and secure. Amazon EC2 reduces the time required to obtain and boot new server instances to minutes, allowing you to quickly scale capacity, both up and down, as your computing requirements change.",
        featureImage: 'https://i.pinimg.com/564x/58/b5/48/58b5486d603986fa563abcfbf034a8c2.jpg',
    },
    {
        id: 4,
        feature: 'Cognito',
        description: 'Amazon Cognito is a web service that provides identity and authentication services. Cognito is a managed service that provides identity and authentication services. Cognito is designed to make web-scale cloud computing easier for developers. It is a fast and easy way to deploy applications on the cloud, and is a great choice for developers who want to build applications that are fast, secure, and easy to scale.',
        need: `Tralio will use an Amazon Cognito user pool to store the user's information. 
        This will allow users to easily login to their account using their email and password. Amazon Cognito also enables us to authenticate users through an external identity provider and provides temporary security credentials to access our app's backend resources in AWS.`,
        featureImage: 'https://miro.medium.com/max/1024/1*m5Wc6pyKsGIf2SnYbUH3PQ.png',
    }
]

export default CloudFeaturesData;
