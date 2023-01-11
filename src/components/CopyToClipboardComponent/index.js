import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';

const CopyToClipboardComponent = () => {
  const [copyToClipboard, { success }] = useCopyToClipboard();

  return (
    <>
      <button onClick={() => copyToClipboard('This was copied')}>
        {success ? 'Copied' : 'Copy Text'}
      </button>
      <input type='text' />
    </>
  );
};

export default CopyToClipboardComponent;
