import { Wrapper, List, Item } from './styles'

export type DetailListProps = {
  data: any
  title: string
  visible: number
}

const DetailList = ({ data, title, visible }: DetailListProps) => {
  return (
    <>
      {visible > 0 ? (
        <Wrapper>
          <h3>{title}</h3>
          <List>
            {data.items.map((item: any, index: number) => {
              return (
                <Item key={index}>
                  <span>{item.name}</span>
                </Item>
              )
            })}
          </List>
        </Wrapper>
      ) : null}
    </>
  )
}

export default DetailList
