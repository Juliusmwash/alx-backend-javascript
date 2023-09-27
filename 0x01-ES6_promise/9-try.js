export default function guardrail(mathFunction) {
  const queue = [];
  const msg = 'Guardrail was processed';
  try {
    const value = mathFunction();
    queue.push(value);
    queue.push(msg);
    return queue;
  } catch (error) {
    queue.push(`Error: ${error.message}`);
    queue.push(msg);
    return queue;
  }
}
