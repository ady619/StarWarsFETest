import './index.scss'

const VehicleList = (props) => {
    const { list } = props
    console.log(list)
    return (
        <div className="object-list">
            <h1 className="object-list-title">List of Star ships</h1>
            {list && list.results.map((item) => (
                <div key={item.id} className="object-item">
                    <div className='list-item-left vertical'>
                        <div className='item-box'><span>{item.name}</span></div>
                        <div className='item-box'>Model</div>
                        <div className='item-box'>{item.model}</div>
                    </div>
                    <div className='list-item-right vertical'>
                        <div className='item-box'>Number of Films:</div>
                        <div className='item-box'>{item.films.length}</div>
                        <div className='item-box'></div>
                    </div>
                </div>
            ))}
        </div>
    );

}

export default VehicleList