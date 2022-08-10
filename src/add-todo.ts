import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import { v4 } from 'uuid';
import { DynamoDB } from 'aws-sdk';

export const handler = async (
  event: APIGatewayEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  const db = new DynamoDB.DocumentClient();
  const { todo } = JSON.parse(event.body as string);
  const createdAt = new Date().toISOString();
  const id = v4();

  const newTodo = { id, todo, createdAt, completed: false };

  await db
    .put({
      TableName: 'TodoTable',
      Item: newTodo,
    })
    .promise();

  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);
  return {
    statusCode: 200,
    body: JSON.stringify(newTodo),
  };
};
