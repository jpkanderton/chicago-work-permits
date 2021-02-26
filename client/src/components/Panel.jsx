import React from 'react';

const Panel = ({permitData, currentPermit, clickEvent, id, key}) => {
  let {total_fee, issue_date, permit_type, street_name, street_number, work_description} = currentPermit

  const selected =  <div>
                      <div>
                        <div>{currentPermit.id}</div>
                        <div>{issue_date}</div>
                        <div>{work_description}</div>

                      </div>
                    </div>;
  const unselected = <div id="panel-permit-id">{permitData.id}</div>;



  return (
    <div id={id} key={key} className="panel-container" onClick ={() => clickEvent(id)}>
      {currentPermit.id === permitData.id ? selected : unselected}
    </div>
  )
}

export default Panel;