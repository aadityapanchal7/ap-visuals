from flask import Flask,render_template,url_for

app=Flask(__name__)

@app.route('/')
def index(): 
  return render_template('index.html')

@app.route('/About')
def about():
  return render_template('About.html')

@app.route('/Projects')
def project():
  return render_template('Projects.html')

@app.route('/Webdev')
def webdev():
  return render_template('Webdev.html')

@app.route('/Design')
def design():
  return render_template('Design.html')

@app.route('/Marketing')
def market():
  return render_template('Marketing.html')

if __name__ == '__main__':
  app.run(debug=True)