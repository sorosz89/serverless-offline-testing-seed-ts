import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';

export const handler = async (
  event: APIGatewayEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  const db = new DynamoDB.DocumentClient();
  let todos;
  try {
    const results = await db.scan({ TableName: 'TodoTable' }).promise();
    todos = results.Items;
  } catch (e) {
    console.log(e);
  }

  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);
  return {
    statusCode: 200,
    body: JSON.stringify(todos),
  };
};
