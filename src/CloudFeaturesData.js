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
]

export default  CloudFeaturesData;
