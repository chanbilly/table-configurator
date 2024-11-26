export default function Loader(props) {
  const { load } = props
  return (
    <div className={`loader ${ load ? 'visible' : '' }`} >
      <div className='loader_content'>
        <div className={`loader_loading-bar`}>
          <div className='loader_loading-bar_title'>Loading...</div>
        </div>
      </div>
    </div>
  )
}