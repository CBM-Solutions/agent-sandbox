# Seed Terraform con misconfigurazioni VOLONTARIE per testare agent:iac.
# NON usare in produzione.

resource "aws_security_group" "web" {
  name        = "web-sg"
  description = "Security group per il web server"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # SSH aperto al mondo (volontario)
  }

  ingress {
    from_port   = 0
    to_port     = 65535
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # tutte le porte aperte (volontario)
  }
}

resource "aws_s3_bucket" "data" {
  bucket = "cbm-sandbox-data"
  acl    = "public-read" # bucket pubblico (volontario)
}

resource "aws_db_instance" "main" {
  engine             = "postgres"
  instance_class     = "db.t3.micro"
  username           = "admin"
  password           = "changeme123" # password in chiaro (volontario)
  publicly_accessible = true
  storage_encrypted  = false
}
