# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"
  config.vm.network :forwarded_port, guest: 8000, host: 8080
  config.vm.hostname = "todo"
  config.vm.network :private_network, ip: "192.168.33.10" #, port: 22
  config.vm.synced_folder "./", "/home/vagrant/todo"

  config.vm.provider :tiktalik do |provider, override|
    override.ssh.private_key_path = '~/.ssh/id_dsa'
    override.vm.box = 'tiktalik'
    override.vm.box_url = 'https://github.com/tiktalik-cloud/vagrant-tiktalik/raw/master/box/tiktalik.box'
    override.vm.hostname = 'todo'
    provider.api_key = ''
    provider.api_secret = ''
    provider.ssh_key = ''
    provider.image = '4a2b3e72-47f1-4e88-b482-1834478ade28'
  end

  config.vm.provision :ansible do |ansible|
    ansible.playbook = "provisioning/playbook.yml"
    ansible.verbose = "extra"
  end
end
