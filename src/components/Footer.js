function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className='copyright'>
        <p>&copy;{currentYear} SpendWize. All Rights Reserved.</p>
      </div>
    </>
  )
}

export default Footer;
