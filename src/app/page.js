import Image from 'next/image'
import { Caveat } from 'next/font/google'
import styles from './page.module.css'
import profile from '../../public/1.jpg'
const cav = Caveat({
 weight : '400',
 subsets : ['latin'],
 display : 'swap'
});

export default function Home() {

  return (
   <div className={styles.container}>
       <div className={styles.postContainer}>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                <Image className={styles.img} src={profile} />
                </div>
                <div className={styles.desc}>
                <span className={cav.className}>location : t.t nagar</span> <br/>
                <span className={cav.className}>quantity : 5</span> <br/>
                <span className={cav.className}>discription : dakbakabdba kabdkakbakd nakdnaudhnwn ndajk ndj di n ind.</span>
                </div>
            </div>

            <div className={styles.post}>
                <div className={styles.imgContainer}>
                <Image className={styles.img} src={profile} />
                </div>
                <div className={styles.desc}>
                <span className={cav.className}>location : t.t nagar</span> <br/>
                <span className={cav.className}>quantity : 5</span> <br/>
                <span className={cav.className}>discription : dakbakabdba kabdkakbakd nakdnaudhnwn ndajk ndj di n ind.</span>
                </div>
            </div>

            <div className={styles.post}>
                <div className={styles.imgContainer}>
                <Image className={styles.img} src={profile} />
                </div>
                <div className={styles.desc}>
                <span className={cav.className}>location : t.t nagar</span> <br/>
                <span className={cav.className}>quantity : 5</span> <br/>
                <span className={cav.className}>discription : dakbakabdba kabdkakbakd nakdnaudhnwn ndajk ndj di n ind.</span>
                </div>
            </div>

            <div className={styles.post}>
                <div className={styles.imgContainer}>
                <Image className={styles.img} src={profile} />
                </div>
                <div className={styles.desc}>
                <span className={cav.className}>location : t.t nagar</span> <br/>
                <span className={cav.className}>quantity : 5</span> <br/>
                <span className={cav.className}>discription : dakbakabdba kabdkakbakd nakdnaudhnwn ndajk ndj di n ind.</span>
                </div>
            </div>
            
            <br/>

            <div className={styles.post}>
            <div className={styles.imgContainer}>
            <Image className={styles.img} src={profile} />
            </div>
            <div className={styles.desc}>
            <span className={cav.className}>location : t.t nagar</span> <br/>
            <span className={cav.className}>quantity : 5</span> <br/>
            <span className={cav.className}>discription : dakbakabdba kabdkakbakd nakdnaudhnwn ndajk ndj di n ind.</span>
            </div>
        </div>

        <div className={styles.post}>
        <div className={styles.imgContainer}>
        <Image className={styles.img} src={profile} />
        </div>
        <div className={styles.desc}>
        <span className={cav.className}>location : t.t nagar</span> <br/>
        <span className={cav.className}>quantity : 5</span> <br/>
        <span className={cav.className}>discription : dakbakabdba kabdkakbakd nakdnaudhnwn ndajk ndj di n ind.</span>
        </div>
    </div>
       </div>
   </div>
  )
}
