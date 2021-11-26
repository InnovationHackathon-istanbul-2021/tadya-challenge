import styled from 'styled-components';

const Content = styled.div``;

export const CreateProducer = () => {
  return (
    <Content className="flex h-full mx-auto pt-8">
      <div className="w-full sm:w-5/6 lg:w-3/4 xl:w-5/12 px-4">
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <div className="flex text-xl justify-left font-semibold pb-8">
            Create Producer
          </div>
        </div>
      </div>
    </Content>
  );
};
