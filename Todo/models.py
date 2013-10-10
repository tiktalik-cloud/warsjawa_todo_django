from django.db import models

class Item(models.Model):
	todo = models.TextField()

	def __unicode__(self):
		return unicode("Item{id=%d, todo=%s}" % (self.id, self.todo))