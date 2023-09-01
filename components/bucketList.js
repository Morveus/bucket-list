import { bucketList } from '../resources/bucketList';

const BucketList = (bucketList) => {
  const calculatePercentageAdvancement = (start, end) => {
    // Define this function
  };

  return (
    <div id="bucketList">
      {bucketList.map((item, i) => {
        let status = item.status;
        let emoji = "";
        let className = "bucketItem";
        let hasMetadata = false;
        let style = {};

        // Handling statuses and properties here
        switch(status) {
          // your switch case here
        }

        return (
          <div 
            key={i} 
            className={className}
            style={style}
            onClick={hasMetadata ? (e) => {
              e.currentTarget.classList.toggle('open');
              e.currentTarget.classList.toggle('closed');
            } : null}
          >
            {item.item + " " + emoji}
          </div>
        );
      })}
    </div>
  );
};

export default BucketList;
