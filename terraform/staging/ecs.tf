resource "aws_cloudwatch_log_group" "itprotv_marketing_log" {
  name = "staging-itprotv-marketing"
}

resource "aws_ecs_task_definition" "task_def" {
  family = "staging-itprotv-marketing"
  container_definitions = <<EOF
[
{
  "name": "itprotv-marketing-yxorp",
  "image": "${var.itprotv_marketing_repo}:${var.image_tag}",
  "essential": true,
  "memory": 64,
  "portMappings": [
    { "containerPort": 80 }
  ],
  "environment": [
    {
      "name": "PROXY_URL",
      "value": "${var.proxy_url}"
    }
  ],
  "logConfiguration": {
    "logDriver": "awslogs",
    "options": {
      "awslogs-region": "${var.region}",
      "awslogs-group": "${aws_cloudwatch_log_group.itprotv_marketing_log.name}",
      "awslogs-stream-prefix": "itprotv-marketing-yxorp"
    }
  }
}
]
EOF
}

resource "aws_ecs_service" "service" {
  name = "new-staging"
  task_definition = "${aws_ecs_task_definition.task_def.arn}"
  desired_count = 1
}