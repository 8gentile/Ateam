{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1420751757000",
      "Effect": "Allow",
      "Action": [
        "s3:*"
      ],
      "Resource": [
        "arn:aws:s3:::ateam-dev",
        "arn:aws:s3:::ateam-dev/*",
        "arn:aws:s3:::ateam-pro",
        "arn:aws:s3:::ateam-pro/*"
      ]
    }
  ]
}
