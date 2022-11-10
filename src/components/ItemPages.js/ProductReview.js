import classes from './Product.module.css'

const ProductReview = () => {
  return (
    <div className={classes.review}>
        <hr />
        <div> 5⭐</div>
        <h4>So motivational</h4>
        <ul className={classes.ul}>
        <img src='https://i.scdn.co/image/ab67616d0000b273b53a7abcb94222c494ae24aa' alt='sss' />
        <img src='https://i.scdn.co/image/ab67616d0000b273ac4df8abcc6d30c12ea0a84d' alt='sss' />
        <img src='https://c.saavncdn.com/083/Soldier-Unknown-2017-20200527193044-500x500.jpg' alt='sss' />
        </ul>
        <p>Ravi 🤩</p>
        <hr />
        <div> 4⭐</div>
        <h4>Nice Product</h4>
        <ul className={classes.ul}>
        <img src='https://i.scdn.co/image/ab67616d0000b273b53a7abcb94222c494ae24aa' alt='sss' />
        <img src='https://i.scdn.co/image/ab67616d0000b273ac4df8abcc6d30c12ea0a84d' alt='sss' />
        <img src='https://c.saavncdn.com/083/Soldier-Unknown-2017-20200527193044-500x500.jpg' alt='sss' />
        </ul>
        <p>Sat Prakash 😎</p>
        <hr />
        <div> 4.5⭐</div>
        <h4>Love from Mars</h4>
        <ul className={classes.ul}>
        <img src='https://i.scdn.co/image/ab67616d0000b273b53a7abcb94222c494ae24aa' alt='sss' />
        <img src='https://i.scdn.co/image/ab67616d0000b273ac4df8abcc6d30c12ea0a84d' alt='sss' />
        <img src='https://c.saavncdn.com/083/Soldier-Unknown-2017-20200527193044-500x500.jpg' alt='sss' />
        </ul>
        <p>Bury Bury zaimon 👾</p>
        <hr />
    </div>
  )
};

export default ProductReview;