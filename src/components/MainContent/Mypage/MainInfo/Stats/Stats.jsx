import s from './Stats.module.css'


const Stats = (props) => {
    return (
        <div className={s.statsWrapper}>
              <div className={s.statsItem}> Friends
                  <div className={s.statsItemCount}>{props.friendsCount}</div>
              </div>
              <div className={s.statsItem}> Posts
                  <div className={s.statsItemCount}>{props.postsCount}</div>
              </div>
              <div className={s.statsItem}> Likes
                  <div className={s.statsItemCount}>{props.likesCount}</div>
              </div>
              <div className={s.statsItem}>Requests
                  <div className={s.statsItemCount}>{props.requestsCount}</div>
              </div>
        </div>           
    );
}
export default Stats;