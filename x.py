import json

def lambda_handler(event, context):
    tbr = 'Hello from Diego!'
    return {
        'statusCode': 200,
        'body': json.dumps(tbr)
    }
